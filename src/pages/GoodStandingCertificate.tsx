import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, Shield, Clock, Send } from "lucide-react";

const GoodStandingCertificate = () => {
  const { toast } = useToast();

  const handleDownloadForm = () => {
    toast({
      title: "Download Started",
      description: "Good Standing Certificate application form download will begin shortly.",
    });
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,Good Standing Certificate Application Form - Download will be available from APMC office';
      link.download = 'good-standing-certificate-form.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const handleSubmitApplication = (formData: FormData) => {
    toast({
      title: "Application Submitted",
      description: "Your Good Standing Certificate application has been submitted successfully. Processing will begin within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">NMC Good Standing Certificate</h1>
            <p className="text-lg text-muted-foreground">
              Official certificate confirming your good standing with the National Medical Commission
            </p>
            <div className="mt-4">
              <Badge variant="secondary" className="mr-2">
                <Shield className="mr-1" size={12} />
                Official Document
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1" size={12} />
                Processing Time: 7-10 Days
              </Badge>
            </div>
          </div>

          {/* What is Good Standing Certificate */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What is a Good Standing Certificate?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A Good Standing Certificate is an official document issued by the National Medical Commission (NMC) 
                that certifies that a medical practitioner is in good standing with the medical council. This certificate 
                confirms that the doctor has no pending disciplinary actions, has maintained their registration, and 
                continues to meet professional standards.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-green-800">Certificate Confirms:</h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Valid medical registration</li>
                    <li>• No disciplinary actions</li>
                    <li>• Compliance with medical ethics</li>
                    <li>• Continuous medical education</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-blue-800">Required For:</h4>
                  <ul className="text-sm space-y-1 text-blue-700">
                    <li>• Employment abroad</li>
                    <li>• Medical license transfer</li>
                    <li>• Higher education applications</li>
                    <li>• Professional verification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>Step-by-step guide to obtain your certificate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">1</div>
                  <h4 className="font-semibold text-sm mb-1">Submit Application</h4>
                  <p className="text-xs text-muted-foreground">Complete online form with required documents</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">2</div>
                  <h4 className="font-semibold text-sm mb-1">Pay Fees</h4>
                  <p className="text-xs text-muted-foreground">Submit application fees via online payment</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">3</div>
                  <h4 className="font-semibold text-sm mb-1">Verification</h4>
                  <p className="text-xs text-muted-foreground">APMC verifies your registration status</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">4</div>
                  <h4 className="font-semibold text-sm mb-1">Certificate Issued</h4>
                  <p className="text-xs text-muted-foreground">Download or collect your certificate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Basic Documents:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Current APMC registration certificate</li>
                    <li>• Identity proof (Aadhaar/Passport)</li>
                    <li>• Passport size photographs</li>
                    <li>• Fee payment receipt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Additional Requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Purpose letter (why certificate needed)</li>
                    <li>• Current practice details</li>
                    <li>• CME compliance certificate</li>
                    <li>• No objection certificate (if employed)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fees Structure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Fee Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Certificate Type</th>
                      <th className="text-left p-3">Processing Time</th>
                      <th className="text-left p-3">Fee Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Standard Processing</td>
                      <td className="p-3">7-10 working days</td>
                      <td className="p-3 font-semibold">₹2,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Express Processing</td>
                      <td className="p-3">3-5 working days</td>
                      <td className="p-3 font-semibold">₹5,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Urgent Processing</td>
                      <td className="p-3">1-2 working days</td>
                      <td className="p-3 font-semibold">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <FileText className="mr-2" size={16} />
                  Apply Online
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Good Standing Certificate Application</DialogTitle>
                  <DialogDescription>
                    Complete the form below to apply for your Good Standing Certificate.
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
                    <Label htmlFor="registrationNumber">APMC Registration Number *</Label>
                    <Input id="registrationNumber" name="registrationNumber" required />
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
                    <Label htmlFor="processingType">Processing Type *</Label>
                    <Select name="processingType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select processing type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (7-10 days) - ₹2,500</SelectItem>
                        <SelectItem value="express">Express (3-5 days) - ₹5,000</SelectItem>
                        <SelectItem value="urgent">Urgent (1-2 days) - ₹10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentPractice">Current Practice Details *</Label>
                    <Textarea id="currentPractice" name="currentPractice" placeholder="Hospital/Clinic name and address where you currently practice" required />
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose of Certificate *</Label>
                    <Textarea id="purpose" name="purpose" placeholder="Explain why you need the Good Standing Certificate" required />
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
              Download Application Form
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Certificate Helpdesk</CardTitle>
              <CardDescription>Get assistance with your Good Standing Certificate application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Phone:</strong> +91-863-2340116
                </div>
                <div>
                  <strong>Email:</strong> certificates@apmcvjw.gov.in
                </div>
                <div>
                  <strong>Office Hours:</strong> 10:00 AM - 5:00 PM (Mon-Fri)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GoodStandingCertificate;