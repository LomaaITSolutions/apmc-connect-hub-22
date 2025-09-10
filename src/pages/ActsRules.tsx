import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Eye, 
  Scale, 
  BookOpen, 
  Gavel,
  Calendar,
  ExternalLink,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface ActRule {
  id: string;
  title: string;
  shortTitle: string;
  category: "acts" | "regulations" | "guidelines" | "rules";
  year: string;
  description: string;
  sections: {
    title: string;
    content: string;
    points?: string[];
  }[];
  lastUpdated: string;
  status: "Active" | "Amended" | "Superseded";
}

const ActsRules = () => {
  const [selectedAct, setSelectedAct] = useState<string>("nmc-act-2019");
  const [searchQuery, setSearchQuery] = useState("");

  const actsRulesData: ActRule[] = [
    {
      id: "nmc-act-2019",
      title: "National Medical Commission Act, 2019",
      shortTitle: "NMC Act 2019",
      category: "acts",
      year: "2019",
      description: "An Act to provide for the constitution of a National Medical Commission in place of the existing Medical Council of India for development and regulation of all aspects of medical education, profession and institutions.",
      sections: [
        {
          title: "Objectives and Constitution",
          content: "The National Medical Commission is constituted to ensure adequate and high quality medical professionals, adopt the latest medical research, periodically assess the institutions producing medical professionals, and maintain a medical register for India.",
          points: [
            "Framing policies for regulating medical institutions and medical profession",
            "Assessing the requirements of healthcare related human resources and developing framework",
            "Framing guidelines for determination of fees and all other charges for fifty percent of seats",
            "Ensuring compliance by the medical institutions of the medical profession"
          ]
        },
        {
          title: "Powers and Functions",
          content: "The Commission shall have the power to frame policies for regulating medical profession, assess healthcare human resource requirements, and ensure compliance by medical institutions.",
        },
        {
          title: "Registration and Practice",
          content: "All medical practitioners must be registered with the appropriate State Medical Council or National Medical Commission to practice modern medicine in India.",
        }
      ],
      lastUpdated: "2023-12-15",
      status: "Active"
    },
    {
      id: "nmc-regulations-2002",
      title: "NMC/IMC Regulations 2002",
      shortTitle: "NMC Regulations 2002",
      category: "regulations",
      year: "2002",
      description: "Regulations governing medical education standards, curriculum requirements, and professional conduct for medical practitioners.",
      sections: [
        {
          title: "Medical Education Standards",
          content: "Comprehensive guidelines for medical colleges regarding infrastructure, faculty requirements, and educational standards.",
        },
        {
          title: "Professional Conduct",
          content: "Code of ethics and professional conduct that all registered medical practitioners must adhere to.",
        }
      ],
      lastUpdated: "2023-10-20",
      status: "Active"
    },
    {
      id: "apmp-act-1986",
      title: "Andhra Pradesh Medical Practitioners Act, 1986",
      shortTitle: "APMP Act 1986",
      category: "acts",
      year: "1986",
      description: "State legislation governing the registration and regulation of medical practitioners in Andhra Pradesh.",
      sections: [
        {
          title: "Registration Requirements",
          content: "Detailed requirements for medical practitioners to register and practice in Andhra Pradesh state.",
        },
        {
          title: "State Medical Council Powers",
          content: "Powers and functions of the Andhra Pradesh Medical Council in regulating medical practice.",
        }
      ],
      lastUpdated: "2023-08-10",
      status: "Active"
    },
    {
      id: "apmp-act-1968",
      title: "Andhra Pradesh Medical Practitioners Act, 1968",
      shortTitle: "APMP Act 1968",
      category: "acts",
      year: "1968",
      description: "Earlier state legislation for medical practitioners regulation, superseded by the 1986 Act.",
      sections: [
        {
          title: "Historical Context",
          content: "This Act laid the foundation for medical practice regulation in Andhra Pradesh before being superseded.",
        }
      ],
      lastUpdated: "2023-01-15",
      status: "Superseded"
    },
    {
      id: "apmc-rules-1978",
      title: "APMC Rules 1978",
      shortTitle: "APMC Rules 1978",
      category: "rules",
      year: "1978",
      description: "Comprehensive rules and procedures for the functioning of the Andhra Pradesh Medical Council.",
      sections: [
        {
          title: "Council Procedures",
          content: "Rules governing the conduct of council meetings, elections, and administrative procedures.",
        },
        {
          title: "Disciplinary Proceedings",
          content: "Detailed procedures for investigating and adjudicating cases of professional misconduct.",
        }
      ],
      lastUpdated: "2023-06-25",
      status: "Active"
    },
    {
      id: "imc-act-1956",
      title: "Indian Medical Council Act, 1956",
      shortTitle: "IMC Act 1956",
      category: "acts",
      year: "1956",
      description: "The foundational central legislation for medical education and practice regulation in India, now superseded by NMC Act 2019.",
      sections: [
        {
          title: "Historical Significance",
          content: "This Act established the framework for medical regulation in India for over six decades.",
        },
        {
          title: "Transition to NMC",
          content: "Provisions for the smooth transition from Indian Medical Council to National Medical Commission.",
        }
      ],
      lastUpdated: "2023-03-20",
      status: "Superseded"
    },
    {
      id: "icmr-guidelines",
      title: "ICMR Ethical Guidelines",
      shortTitle: "ICMR Guidelines",
      category: "guidelines",
      year: "2017",
      description: "Indian Council of Medical Research guidelines for biomedical and health research involving human participants.",
      sections: [
        {
          title: "Research Ethics",
          content: "Comprehensive guidelines for conducting ethical medical research involving human subjects.",
        },
        {
          title: "Institutional Review Boards",
          content: "Requirements and procedures for establishing and operating institutional review boards.",
        }
      ],
      lastUpdated: "2023-11-30",
      status: "Active"
    },
    {
      id: "epidemic-act-1897",
      title: "Epidemic Diseases Act, 1897",
      shortTitle: "Pandemic Act 1897",
      category: "acts",
      year: "1897",
      description: "Central legislation providing framework for prevention and control of epidemic diseases.",
      sections: [
        {
          title: "Emergency Powers",
          content: "Special powers granted to government authorities during epidemic situations.",
        },
        {
          title: "Public Health Measures",
          content: "Provisions for implementing public health measures during disease outbreaks.",
        }
      ],
      lastUpdated: "2023-09-15",
      status: "Active"
    }
  ];

  const filteredActs = actsRulesData.filter(act => 
    act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    act.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    act.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedActData = actsRulesData.find(act => act.id === selectedAct);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "acts": return Scale;
      case "regulations": return Gavel;
      case "guidelines": return BookOpen;
      case "rules": return FileText;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "acts": return "bg-medical-teal/10 text-medical-teal";
      case "regulations": return "bg-medical-blue/10 text-medical-blue";
      case "guidelines": return "bg-medical-green/10 text-medical-green";
      case "rules": return "bg-medical-orange/10 text-medical-orange";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-medical-green/10 text-medical-green border-medical-green/20";
      case "Amended": return "bg-medical-orange/10 text-medical-orange border-medical-orange/20";
      case "Superseded": return "bg-muted/10 text-muted-foreground border-muted/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  function AppSidebar() {
    const { state } = useSidebar();
    const collapsed = state === "collapsed";

    return (
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-medical-teal font-semibold text-base">
              Acts & Rules
            </SidebarGroupLabel>
            
            {!collapsed && (
              <div className="px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search acts & rules..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
            )}

            <SidebarGroupContent>
              <SidebarMenu>
                {filteredActs.map((act) => {
                  const IconComponent = getCategoryIcon(act.category);
                  const isSelected = selectedAct === act.id;
                  
                  return (
                    <SidebarMenuItem key={act.id}>
                      <SidebarMenuButton 
                        onClick={() => setSelectedAct(act.id)}
                        className={`p-3 ${isSelected ? "bg-medical-teal/10 text-medical-teal border-l-2 border-medical-teal" : "hover:bg-muted/50"}`}
                      >
                        <IconComponent className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && (
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">{act.shortTitle}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {act.year} • {act.category}
                            </div>
                          </div>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-medical-teal to-medical-teal-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Acts & Rules
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive collection of medical acts, regulations, and guidelines governing medical practice in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <SidebarProvider defaultOpen>
        <div className="container mx-auto px-4 py-8">
          {/* Mobile trigger */}
          <div className="lg:hidden mb-4">
            <SidebarTrigger className="p-2 border rounded-md" />
          </div>
          
          <div className="flex min-h-screen w-full">
            <AppSidebar />

            {/* Main Content */}
            <main className="flex-1 pl-6">
              {selectedActData && (
                <>
                  {/* Quick Actions */}
                  <Card className="mb-6 border border-border/50 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${getCategoryColor(selectedActData.category)}`}>
                            {(() => {
                              const IconComponent = getCategoryIcon(selectedActData.category);
                              return <IconComponent className="h-6 w-6" />;
                            })()}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-primary">{selectedActData.title}</h2>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className={getCategoryColor(selectedActData.category)}>
                                {selectedActData.category.toUpperCase()}
                              </Badge>
                              <Badge variant="outline" className={getStatusColor(selectedActData.status)}>
                                {selectedActData.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {selectedActData.year}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="bg-medical-teal text-white hover:bg-medical-teal/90">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal/10">
                            <Eye className="w-4 h-4 mr-2" />
                            View Online
                          </Button>
                          <Button variant="outline" size="icon">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Act Description */}
                  <Card className="mb-6 border border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {selectedActData.description}
                      </p>
                      <div className="mt-4 p-4 bg-medical-teal/5 rounded-lg border-l-4 border-medical-teal">
                        <div className="text-sm text-foreground/80">
                          <strong>Last Updated:</strong> {selectedActData.lastUpdated}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Act Sections */}
                  <div className="space-y-6">
                    {selectedActData.sections.map((section, index) => (
                      <Card key={index} className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center gap-3 text-xl text-primary">
                            <div className="w-8 h-8 bg-medical-teal/10 rounded-lg flex items-center justify-center text-medical-teal font-bold text-sm">
                              {index + 1}
                            </div>
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-foreground/80 leading-relaxed">
                            {section.content}
                          </p>
                          {section.points && (
                            <ul className="space-y-3 ml-4">
                              {section.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start gap-3 text-foreground/80">
                                  <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Footer Notice */}
                  <Card className="mt-8 border border-medical-orange/20 bg-medical-orange/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-medical-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText className="w-3 h-3 text-medical-orange" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-medical-orange mb-2">Important Notice</h4>
                          <p className="text-sm text-foreground/80">
                            This is a reference copy. For official and legally binding versions, please refer to the Government Gazette notifications and official publications. Always verify with the latest amendments and notifications.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ActsRules;