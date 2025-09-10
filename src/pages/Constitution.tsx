import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Users, Scale, Gavel, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Constitution = () => {
  const sidebarLinks = [
    { name: "Acts/Rules", href: "/acts-rules", icon: Scale },
    { name: "Meetings and Decisions", href: "/meetings-decisions", icon: Users },
    { name: "Downloads", href: "#", icon: Download },
  ];

  const constitutionSections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: `The Andhra Pradesh Medical Council (APMC) is constituted under the Indian Medical Council Act, 1956, and the Andhra Pradesh Medical Council Act, 1956. This constitution establishes the framework for regulating medical education and practice in Andhra Pradesh, ensuring that the highest standards of medical ethics and professional competence are maintained for the protection and welfare of public health.`,
    },
    {
      id: "objectives",
      title: "Objectives of the Constitution",
      icon: Shield,
      content: `The primary objectives include maintaining a register of qualified medical practitioners, prescribing standards of professional conduct, regulating medical education, and ensuring continuous professional development. The council aims to protect public health by maintaining professional standards and ethical practices among medical practitioners.`,
      points: [
        "Maintain the State Medical Register of qualified practitioners",
        "Prescribe and enforce standards of professional conduct and ethics",
        "Regulate medical education and training standards",
        "Investigate professional misconduct and take disciplinary action",
        "Facilitate continuous medical education and professional development",
      ],
    },
    {
      id: "powers",
      title: "Powers & Functions of the Council",
      icon: Gavel,
      content: `The APMC exercises statutory powers for the regulation of medical practice and education within the state jurisdiction.`,
      points: [
        "Registration of medical practitioners and maintenance of state register",
        "Recognition of medical qualifications for practice in Andhra Pradesh",
        "Prescription of standards for medical education and training",
        "Disciplinary proceedings against medical practitioners",
        "Inspection and recognition of medical institutions",
        "Framing regulations for professional conduct and ethics",
      ],
    },
    {
      id: "rules",
      title: "Rules & Regulations Framework",
      icon: Scale,
      content: `The council operates under a comprehensive framework of rules and regulations that govern medical practice, education, and professional conduct.`,
      points: [
        "Professional conduct regulations and code of ethics",
        "Registration procedures and renewal requirements",
        "Disciplinary procedures and penalty framework",
        "Medical education standards and curriculum guidelines",
        "Continuing Medical Education (CME) requirements",
        "Fee structure for various services and procedures",
      ],
    },
    {
      id: "membership",
      title: "Membership & Representation",
      icon: Users,
      content: `The council comprises elected and nominated members representing various constituencies within the medical community.`,
      points: [
        "Elected representatives from registered medical practitioners",
        "Nominated members from medical colleges and institutions",
        "Government nominees including administrative officials",
        "Ex-officio members as per statutory provisions",
        "Subject matter experts and specialists in various medical fields",
      ],
    },
    {
      id: "rights",
      title: "Rights & Responsibilities of Registered Medical Practitioners",
      icon: Shield,
      content: `All registered medical practitioners have specific rights and must fulfill certain responsibilities as outlined in the constitution.`,
      points: [
        "Right to practice medicine within the scope of registration",
        "Right to fair hearing in disciplinary proceedings",
        "Responsibility to maintain professional competence and ethics",
        "Obligation to complete mandatory continuing education",
        "Duty to report professional misconduct by colleagues",
        "Compliance with all council regulations and guidelines",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-medical-teal to-medical-teal-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Constitution of Andhra Pradesh Medical Council
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Establishing the legal framework for medical practice regulation and professional standards in Andhra Pradesh
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Constitution
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-medical-teal border-white hover:bg-white/90"
              >
                <FileText className="w-4 h-4 mr-2" />
                View in PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {constitutionSections.map((section, index) => (
              <Card key={section.id} className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                    <div className="p-2 bg-medical-teal/10 rounded-lg">
                      <section.icon className="w-6 h-6 text-medical-teal" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed text-lg">
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

            {/* Amendments & Governance */}
            <Card className="border border-border/50 shadow-card hover:shadow-medical transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <div className="p-2 bg-medical-teal/10 rounded-lg">
                    <Gavel className="w-6 h-6 text-medical-teal" />
                  </div>
                  Amendments & Governance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  The constitution may be amended from time to time to meet the evolving needs of medical practice and education. All amendments are subject to statutory approval and must be in compliance with central and state legislation.
                </p>
                <div className="bg-medical-teal/5 p-6 rounded-lg border-l-4 border-medical-teal">
                  <h4 className="font-semibold text-primary mb-2">Amendment Process</h4>
                  <p className="text-foreground/80">
                    Constitutional amendments require a majority decision of the council, government approval, and must be notified in the official gazette before taking effect.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sidebarLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    className="w-full justify-start hover:bg-medical-teal/5 hover:text-medical-teal"
                    asChild
                  >
                    <Link to={link.href}>
                      <link.icon className="w-4 h-4 mr-3" />
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border border-medical-orange/20 bg-medical-orange/5">
              <CardHeader>
                <CardTitle className="text-lg text-medical-orange">Important Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  All medical practitioners must ensure compliance with the latest constitutional provisions and regulations.
                </p>
                <Button 
                  className="w-full bg-medical-orange text-white hover:bg-medical-orange/90"
                  size="sm"
                  asChild
                >
                  <Link to="/latest-updates">View Latest Updates</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Need Assistance?</CardTitle>
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

export default Constitution;