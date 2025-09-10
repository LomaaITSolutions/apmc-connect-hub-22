import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, Info, Eye } from "lucide-react";

const InAbsentiaAffidavit = () => {
  const { toast } = useToast();

  const handleDownloadTemplate = () => {
    toast({
      title: "Download Started",
      description: "IN ABSENTIA Affidavit template download will begin shortly.",
    });
    setTimeout(() => {
      const affidavitContent = `AFFIDAVIT FOR IN ABSENTIA REGISTRATION

I, _________________ (Name), son/daughter of _________________, aged _______ years, residing at _________________, do hereby solemnly affirm and declare as under:

1. That I am a medical graduate from _________________ University/Institution.
2. That I have completed my medical education as per the requirements of Medical Council of India/National Medical Commission.
3. That I am applying for registration with Andhra Pradesh Medical Council under IN ABSENTIA provision.
4. That all documents submitted by me are genuine and authentic.
5. That I undertake to comply with all rules and regulations of APMC.

DEPONENT

Verified at _______ this _______ day of _______ 20___`;
      
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(affidavitContent);
      link.download = 'in-absentia-affidavit-template.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">IN ABSENTIA Affidavit Proforma</h1>
            <p className="text-lg text-muted-foreground">
              Official affidavit template for doctors applying for IN ABSENTIA registration
            </p>
          </div>

          {/* Information Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="text-blue-600" size={20} />
                About IN ABSENTIA Affidavit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The IN ABSENTIA Affidavit is a legal document that must be submitted by doctors who wish to register 
                with the Andhra Pradesh Medical Council without being physically present in the state. This affidavit 
                serves as a sworn statement confirming the authenticity of submitted documents and medical credentials.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Important Notes:</h4>
                <ul className="text-sm space-y-1">
                  <li>• The affidavit must be notarized by a competent authority</li>
                  <li>• All information provided must be accurate and verifiable</li>
                  <li>• False information may lead to rejection of application</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Affidavit Content Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Affidavit Format</CardTitle>
              <CardDescription>Standard format for IN ABSENTIA registration affidavit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg text-sm">
                <div className="text-center mb-4 font-bold">AFFIDAVIT</div>
                <p className="mb-4">
                  I, _________________ (Name), son/daughter of _________________, 
                  aged _______ years, residing at _________________,
                  do hereby solemnly affirm and declare as under:
                </p>
                <ol className="space-y-2 ml-4">
                  <li>1. That I am a medical graduate from _________________ University/Institution.</li>
                  <li>2. That I have completed my medical education as per the requirements of Medical Council of India/National Medical Commission.</li>
                  <li>3. That I am applying for registration with Andhra Pradesh Medical Council under IN ABSENTIA provision.</li>
                  <li>4. That all documents submitted by me are genuine and authentic.</li>
                  <li>5. That I undertake to comply with all rules and regulations of APMC.</li>
                </ol>
                <p className="mt-4 text-center">
                  <strong>DEPONENT</strong>
                </p>
                <p className="mt-2 text-center text-xs">
                  Verified at _______ this _______ day of _______ 20___
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Documents to Attach with Affidavit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Notarized copy of degree certificate</li>
                  <li>• Passport size photographs</li>
                  <li>• Identity proof (Aadhaar/Passport)</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Character certificate</li>
                  <li>• Experience certificates (if any)</li>
                  <li>• Address proof</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleDownloadTemplate}>
              <Download className="mr-2" size={16} />
              Download Affidavit Template
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Eye className="mr-2" size={16} />
                  View Sample
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Sample Filled Affidavit</DialogTitle>
                  <DialogDescription>
                    This is a sample of how the affidavit should be filled out.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-gray-50 p-6 rounded-lg text-sm font-mono">
                  <div className="text-center mb-4 font-bold">AFFIDAVIT</div>
                  <p className="mb-4">
                    I, <strong>Dr. John Smith</strong>, son of <strong>Robert Smith</strong>, 
                    aged <strong>32</strong> years, residing at <strong>123 Medical Street, New York, USA</strong>,
                    do hereby solemnly affirm and declare as under:
                  </p>
                  <ol className="space-y-2 ml-4">
                    <li>1. That I am a medical graduate from <strong>Harvard Medical School</strong> University/Institution.</li>
                    <li>2. That I have completed my medical education as per the requirements of Medical Council of India/National Medical Commission.</li>
                    <li>3. That I am applying for registration with Andhra Pradesh Medical Council under IN ABSENTIA provision.</li>
                    <li>4. That all documents submitted by me are genuine and authentic.</li>
                    <li>5. That I undertake to comply with all rules and regulations of APMC.</li>
                  </ol>
                  <div className="mt-6 text-right">
                    <p><strong>Dr. John Smith</strong></p>
                    <p><strong>DEPONENT</strong></p>
                  </div>
                  <p className="mt-4 text-center text-xs">
                    Verified at <strong>New York</strong> this <strong>15th</strong> day of <strong>March</strong> 20<strong>24</strong>
                  </p>
                  <div className="mt-4 text-center">
                    <p className="text-xs"><strong>Before me,</strong></p>
                    <p className="text-xs"><strong>Notary Public</strong></p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Assistance?</CardTitle>
              <CardDescription>Contact us for help with affidavit preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Office Hours:</strong> Monday to Friday, 10:00 AM - 5:00 PM
                </div>
                <div>
                  <strong>Help Desk:</strong> +91-863-2340116
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InAbsentiaAffidavit;