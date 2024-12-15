import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdFormat } from "@/types/adWizard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FACEBOOK_AD_FORMATS, GOOGLE_AD_FORMATS } from "@/types/adFormats";

const AdSizeStep = ({
  onNext,
  onBack,
}: {
  onNext: (format: AdFormat) => void;
  onBack: () => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="space-x-2 w-full md:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </Button>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Choose Ad Format</h2>
        <p className="text-gray-600 mb-6">
          Select the platform and format that best fits your campaign goals.
        </p>
      </div>

      <Tabs defaultValue="facebook" className="w-full">
        <TabsList className="grid grid-cols-2 gap-4 bg-transparent h-auto mb-6">
          <TabsTrigger 
            value="facebook" 
            className="data-[state=active]:bg-facebook data-[state=active]:text-white py-3"
          >
            Facebook Ads
          </TabsTrigger>
          <TabsTrigger 
            value="google" 
            className="data-[state=active]:bg-[#4285F4] data-[state=active]:text-white py-3"
          >
            Google Ads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="facebook">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList className="grid grid-cols-2 gap-4 bg-transparent h-auto mb-6">
              <TabsTrigger value="feed">Feed Ads</TabsTrigger>
              <TabsTrigger value="story">Story Ads</TabsTrigger>
            </TabsList>

            {Object.entries(FACEBOOK_AD_FORMATS).map(([key, formats]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid gap-6">
                  {formats.map((format) => (
                    <Card
                      key={format.format}
                      className="relative group cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-facebook"
                      onClick={() => onNext(format)}
                    >
                      <CardHeader>
                        <CardTitle>{format.format}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            {format.dimensions.width} x {format.dimensions.height}px
                          </p>
                          <p className="text-gray-600">
                            Aspect Ratio: {format.aspectRatio}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {format.description}
                          </p>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-5 h-5 text-facebook" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        <TabsContent value="google">
          <Tabs defaultValue="display" className="w-full">
            <TabsList className="grid grid-cols-3 gap-4 bg-transparent h-auto mb-6">
              <TabsTrigger value="display">Display</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
            </TabsList>

            {Object.entries(GOOGLE_AD_FORMATS).map(([key, formats]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid gap-6">
                  {formats.map((format) => (
                    <Card
                      key={format.format}
                      className="relative group cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-[#4285F4]"
                      onClick={() => onNext(format)}
                    >
                      <CardHeader>
                        <CardTitle>{format.format}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            {format.dimensions.width} x {format.dimensions.height}px
                          </p>
                          <p className="text-gray-600">
                            Aspect Ratio: {format.aspectRatio}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {format.description}
                          </p>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-5 h-5 text-[#4285F4]" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdSizeStep;