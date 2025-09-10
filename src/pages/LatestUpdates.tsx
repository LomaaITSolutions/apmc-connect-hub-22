import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, FileText, AlertCircle, Users, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LatestUpdates = () => {
  const updates = [
    {
      id: 1,
      date: "2024-01-15",
      title: "New Guidelines for Continuing Medical Education (CME)",
      category: "Education",
      priority: "high",
      description: "Updated requirements for CME credits and new online platform for certification. All registered practitioners must complete 30 credit hours annually.",
      downloadUrl: "#"
    },
    {
      id: 2,
      date: "2024-01-10",
      title: "Amendment to Professional Conduct Regulations",
      category: "Regulations",
      priority: "medium",
      description: "Revised guidelines for telemedicine practice and patient data privacy compliance as per new digital health protocols.",
      downloadUrl: "#"
    },
    {
      id: 3,
      date: "2024-01-05",
      title: "Registration Fee Structure Update",
      category: "Administrative",
      priority: "medium",
      description: "Updated fee structure for new registrations, renewals, and additional qualifications effective from February 2024.",
      downloadUrl: "#"
    },
    {
      id: 4,
      date: "2023-12-20",
      title: "COVID-19 Practice Guidelines Revision",
      category: "Health Policy",
      priority: "low",
      description: "Updated safety protocols and treatment guidelines based on latest WHO recommendations and state health department directives.",
      downloadUrl: "#"
    },
    {
      id: 5,
      date: "2023-12-15",
      title: "Annual Council Meeting Minutes",
      category: "Meetings",
      priority: "low",
      description: "Summary of decisions and resolutions from the annual general meeting including election results and policy changes.",
      downloadUrl: "#"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-medical-orange text-white";
      case "medium":
        return "bg-medical-teal text-white";
      case "low":
        return "bg-medical-green text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return Users;
      case "Regulations":
        return FileText;
      case "Administrative":
        return Calendar;
      case "Health Policy":
        return AlertCircle;
      case "Meetings":
        return Users;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-medical-teal to-medical-teal-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/constitution" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Constitution
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Updates & Announcements
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Stay informed with the latest regulations, guidelines, and important announcements from Andhra Pradesh Medical Council
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {updates.map((update) => {
              const CategoryIcon = getCategoryIcon(update.category);
              return (
                <Card key={update.id} className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {update.category}
                          </Badge>
                          <Badge className={getPriorityColor(update.priority)}>
                            {update.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <CardTitle className="flex items-start gap-3 text-xl text-primary">
                          <div className="p-2 bg-medical-teal/10 rounded-lg mt-1">
                            <CategoryIcon className="w-5 h-5 text-medical-teal" />
                          </div>
                          <span className="leading-tight">{update.title}</span>
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        {new Date(update.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {update.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="text-foreground/60 hover:text-medical-teal"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Filter by Category */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Filter by Category</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["All", "Education", "Regulations", "Administrative", "Health Policy", "Meetings"].map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start hover:bg-medical-teal/5 hover:text-medical-teal"
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Subscribe to Updates */}
            <Card className="border border-medical-green/20 bg-medical-green/5">
              <CardHeader>
                <CardTitle className="text-lg text-medical-green">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  Subscribe to receive email notifications for important updates and announcements.
                </p>
                <Button 
                  className="w-full bg-medical-green text-white hover:bg-medical-green/90"
                  size="sm"
                >
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Need Clarification?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-foreground/80">
                  <p className="font-medium mb-1">Registrar's Office</p>
                  <p>Phone: +91-863-2340116</p>
                  <p>Email: apmcvjw@gmail.com</p>
                </div>
                <Separator />
                <div className="text-sm text-foreground/80">
                  <p className="font-medium mb-1">Office Hours</p>
                  <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;