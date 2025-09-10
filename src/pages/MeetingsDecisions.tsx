import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, FileText, Users, Download, ArrowLeft, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MeetingsDecisions = () => {
  const meetings = [
    {
      id: 1,
      date: "2024-01-20",
      title: "Annual General Meeting 2024",
      type: "Annual General Meeting",
      status: "completed",
      attendees: 45,
      decisions: 8,
      description: "Review of annual performance, election of council members, budget approval, and policy amendments for the upcoming year.",
      agenda: [
        "Review of Annual Report 2023",
        "Financial Statement and Budget Approval",
        "Election of Council Members",
        "Policy Amendments and Updates",
        "CME Requirements Update",
        "Disciplinary Committee Reports"
      ],
      minutesUrl: "#",
      documentsUrl: "#"
    },
    {
      id: 2,
      date: "2023-12-15",
      title: "Disciplinary Committee Meeting",
      type: "Disciplinary Committee",
      status: "completed",
      attendees: 12,
      decisions: 5,
      description: "Review of pending disciplinary cases, ethical violation investigations, and enforcement of professional conduct standards.",
      agenda: [
        "Case Review: Professional Misconduct Cases",
        "Ethical Violation Investigations",
        "License Suspension Recommendations",
        "Appeal Hearings Schedule",
        "Professional Conduct Guidelines Review"
      ],
      minutesUrl: "#",
      documentsUrl: "#"
    },
    {
      id: 3,
      date: "2023-11-30",
      title: "Education Standards Committee",
      type: "Committee Meeting",
      status: "completed",
      attendees: 18,
      decisions: 6,
      description: "Discussion on medical education standards, curriculum updates, and continuing medical education requirements.",
      agenda: [
        "Medical College Inspection Reports",
        "Curriculum Update Proposals",
        "CME Credit System Review",
        "Faculty Qualification Standards",
        "Clinical Training Requirements",
        "Technology Integration in Medical Education"
      ],
      minutesUrl: "#",
      documentsUrl: "#"
    },
    {
      id: 4,
      date: "2024-02-10",
      title: "Emergency Council Meeting",
      type: "Emergency Meeting",
      status: "scheduled",
      attendees: null,
      decisions: null,
      description: "Urgent matters regarding recent health policy changes and their implementation in medical practice regulations.",
      agenda: [
        "Health Policy Implementation",
        "Emergency Protocol Updates",
        "Temporary Practice Guidelines",
        "Crisis Management Procedures"
      ],
      minutesUrl: null,
      documentsUrl: "#"
    }
  ];

  const decisions = [
    {
      id: 1,
      date: "2024-01-20",
      title: "Mandatory CME Hours Increase",
      category: "Education Policy",
      impact: "All Practitioners",
      description: "Decision to increase mandatory CME hours from 20 to 30 annually, effective from April 2024.",
      implementationDate: "2024-04-01"
    },
    {
      id: 2,
      date: "2024-01-20",
      title: "Telemedicine Practice Guidelines",
      category: "Practice Standards",
      impact: "Telemedicine Practitioners",
      description: "New guidelines for telemedicine practice including patient consent, data privacy, and emergency protocols.",
      implementationDate: "2024-03-01"
    },
    {
      id: 3,
      date: "2023-12-15",
      title: "License Renewal Fee Structure",
      category: "Administrative",
      impact: "All Practitioners",
      description: "Revised fee structure for license renewals and late payment penalties.",
      implementationDate: "2024-01-01"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-medical-green text-white";
      case "scheduled":
        return "bg-medical-teal text-white";
      case "postponed":
        return "bg-medical-orange text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes("Annual")) return Users;
    if (type.includes("Disciplinary")) return FileText;
    if (type.includes("Emergency")) return Clock;
    return Calendar;
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
              Meetings & Decisions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Council meeting minutes, decisions, and resolutions that shape medical practice in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Recent Meetings */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Recent Council Meetings</h2>
              {meetings.map((meeting) => {
                const TypeIcon = getTypeIcon(meeting.type);
                return (
                  <Card key={meeting.id} className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {meeting.type}
                            </Badge>
                            <Badge className={getStatusColor(meeting.status)}>
                              {meeting.status.toUpperCase()}
                            </Badge>
                          </div>
                          <CardTitle className="flex items-start gap-3 text-xl text-primary">
                            <div className="p-2 bg-medical-teal/10 rounded-lg mt-1">
                              <TypeIcon className="w-5 h-5 text-medical-teal" />
                            </div>
                            <span className="leading-tight">{meeting.title}</span>
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Calendar className="w-4 h-4" />
                          {new Date(meeting.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        {meeting.description}
                      </p>
                      
                      {meeting.attendees && (
                        <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {meeting.attendees} Attendees
                          </div>
                          {meeting.decisions && (
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              {meeting.decisions} Decisions
                            </div>
                          )}
                        </div>
                      )}

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Meeting Agenda</h4>
                        <ul className="space-y-1">
                          {meeting.agenda.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                              <div className="w-1.5 h-1.5 bg-medical-teal rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {meeting.minutesUrl && (
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Minutes
                          </Button>
                        )}
                        <Button 
                          variant="ghost"
                          size="sm"
                          className="text-foreground/60 hover:text-medical-teal"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Documents
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Key Decisions */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Recent Council Decisions</h2>
              {decisions.map((decision) => (
                <Card key={decision.id} className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {decision.category}
                          </Badge>
                          <Badge className="bg-medical-green text-white">
                            {decision.impact}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-primary">
                          {decision.title}
                        </CardTitle>
                      </div>
                      <div className="text-sm text-foreground/60">
                        Decided: {new Date(decision.date).toLocaleDateString('en-IN')}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {decision.description}
                    </p>
                    <div className="bg-medical-teal/5 p-3 rounded-lg border-l-4 border-medical-teal">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-medical-teal" />
                        <span className="font-medium text-primary">Implementation Date:</span>
                        <span className="text-foreground/80">
                          {new Date(decision.implementationDate).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Meeting Calendar */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Upcoming Meetings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-medical-teal/5 p-3 rounded-lg">
                  <div className="font-medium text-primary mb-1">Emergency Council Meeting</div>
                  <div className="text-sm text-foreground/60 mb-2">February 10, 2024 | 10:00 AM</div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                  >
                    View Agenda
                  </Button>
                </div>
                <Separator />
                <div className="text-sm text-foreground/60">
                  <p>Regular monthly meetings are held on the third Friday of each month.</p>
                </div>
              </CardContent>
            </Card>

            {/* Meeting Archives */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Meeting Archives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["2023", "2022", "2021", "2020"].map((year) => (
                  <Button
                    key={year}
                    variant="ghost"
                    className="w-full justify-start hover:bg-medical-teal/5 hover:text-medical-teal"
                  >
                    <Calendar className="w-4 h-4 mr-3" />
                    {year} Meeting Records
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Meeting Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-foreground/80">
                  <p className="font-medium mb-1">Secretary's Office</p>
                  <p>Phone: +91-863-2340116</p>
                  <p>Email: apmcvjw@gmail.com</p>
                </div>
                <Separator />
                <div className="text-sm text-foreground/80">
                  <p className="font-medium mb-1">Meeting Venue</p>
                  <p>APMC Conference Hall</p>
                  <p>Vijayawada, Andhra Pradesh</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsDecisions;