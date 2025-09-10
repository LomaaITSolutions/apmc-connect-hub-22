import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const NOCApplication = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    email: "",
    phone: "",
    currentAddress: "",
    proposedAddress: "",
    reasonForNOC: "",
    nocType: "",
    qualification: "",
    yearOfRegistration: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your NOC application has been submitted successfully. You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              No Objection Certificate Application
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apply for NOC to practice medicine in a different location or for specific medical activities
            </p>
          </div>
        </div>

        {/* Application Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">NOC Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="registrationNumber">Medical Registration Number *</Label>
                  <Input
                    id="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                    placeholder="Enter registration number"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="qualification">Medical Qualification *</Label>
                  <Input
                    id="qualification"
                    value={formData.qualification}
                    onChange={(e) => handleInputChange("qualification", e.target.value)}
                    placeholder="e.g., MBBS, MD, MS"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="yearOfRegistration">Year of Registration *</Label>
                  <Input
                    id="yearOfRegistration"
                    value={formData.yearOfRegistration}
                    onChange={(e) => handleInputChange("yearOfRegistration", e.target.value)}
                    placeholder="Enter year of registration"
                    required
                  />
                </div>
              </div>

              {/* NOC Details */}
              <div>
                <Label htmlFor="nocType">NOC Type *</Label>
                <Select onValueChange={(value) => handleInputChange("nocType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select NOC type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="practice-relocation">Practice Relocation</SelectItem>
                    <SelectItem value="temporary-practice">Temporary Practice</SelectItem>
                    <SelectItem value="consultation">Consultation Services</SelectItem>
                    <SelectItem value="research">Research Activities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="currentAddress">Current Practice Address *</Label>
                <Textarea
                  id="currentAddress"
                  value={formData.currentAddress}
                  onChange={(e) => handleInputChange("currentAddress", e.target.value)}
                  placeholder="Enter current practice address"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="proposedAddress">Proposed Practice Address *</Label>
                <Textarea
                  id="proposedAddress"
                  value={formData.proposedAddress}
                  onChange={(e) => handleInputChange("proposedAddress", e.target.value)}
                  placeholder="Enter proposed practice address"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="reasonForNOC">Reason for NOC *</Label>
                <Textarea
                  id="reasonForNOC"
                  value={formData.reasonForNOC}
                  onChange={(e) => handleInputChange("reasonForNOC", e.target.value)}
                  placeholder="Explain the reason for requesting NOC"
                  rows={4}
                  required
                />
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <Label>Required Documents</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload Registration Certificate</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload Supporting Documents</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-3"
                >
                  Submit NOC Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NOCApplication;