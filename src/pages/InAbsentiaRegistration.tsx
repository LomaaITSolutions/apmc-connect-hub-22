import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, CheckCircle, Send } from "lucide-react";

const InAbsentiaRegistration = () => {
  const { toast } = useToast();

  const handleDownloadForm = () => {
    toast({
      title: "Download Started",
      description: "IN ABSENTIA Registration Form download will begin shortly.",
    });
    // Simulate download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,IN ABSENTIA Registration Form - Download will be available from APMC office';
      link.download = 'in-absentia-registration-form.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const handleSubmitApplication = (formData: FormData) => {
    toast({
      title: "Application Submitted",
      description: "Your IN ABSENTIA registration application has been submitted successfully. You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">IN ABSENTIA Registration</h1>
            <p className="text-lg text-muted-foreground">
              Register for medical practice without physical presence - For doctors residing outside Andhra Pradesh
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <CardTitle className="text-lg">Submit Application</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete the online application form with all required documents
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <CardTitle className="text-lg">Document Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  APMC verifies all submitted documents and credentials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <CardTitle className="text-lg">Registration Complete</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive your registration certificate and practice authorization
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>• Medical degree certificates</li>
                  <li>• Post-graduation certificates (if applicable)</li>
                  <li>• Experience certificates</li>
                  <li>• Character certificate</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>• Passport size photographs</li>
                  <li>• Identity proof (Aadhaar/Passport)</li>
                  <li>• Address proof</li>
                  <li>• Registration fee payment receipt</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <FileText className="mr-2" size={16} />
                  Start Application
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>IN ABSENTIA Registration Application</DialogTitle>
                  <DialogDescription>
                    Complete the form below to submit your IN ABSENTIA registration application.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleSubmitApplication(formData);
                }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="qualification">Medical Qualification *</Label>
                    <Select name="qualification" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mbbs">MBBS</SelectItem>
                        <SelectItem value="md">MD</SelectItem>
                        <SelectItem value="ms">MS</SelectItem>
                        <SelectItem value="dm">DM</SelectItem>
                        <SelectItem value="mch">MCh</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="university">University/Institution *</Label>
                    <Input id="university" name="university" required />
                  </div>
                  <div>
                    <Label htmlFor="currentAddress">Current Address *</Label>
                    <Textarea id="currentAddress" name="currentAddress" required />
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose of Registration *</Label>
                    <Textarea id="purpose" name="purpose" placeholder="Please explain why you need IN ABSENTIA registration" required />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2" size={16} />
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" onClick={handleDownloadForm}>
              <Download className="mr-2" size={16} />
              Download Form
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact our registration helpdesk for assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Phone:</strong> +91-863-2340116
                </div>
                <div>
                  <strong>Email:</strong> apmcvjw@gmail.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InAbsentiaRegistration;