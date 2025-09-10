import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bell, Calendar, AlertCircle, Users, Settings, Check, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: "2024-01-15",
      time: "10:30 AM",
      title: "New CME Credit Requirements",
      message: "Updated continuing medical education requirements are now effective. All registered practitioners must complete 30 credit hours annually.",
      type: "important",
      read: false,
      category: "Education"
    },
    {
      id: 2,
      date: "2024-01-12",
      time: "02:15 PM",
      title: "Registration Renewal Reminder",
      message: "Your medical registration is due for renewal by January 31, 2024. Please complete the renewal process to avoid penalties.",
      type: "warning",
      read: false,
      category: "Registration"
    },
    {
      id: 3,
      date: "2024-01-10",
      time: "09:45 AM",
      title: "Council Meeting Minutes Available",
      message: "Minutes from the December 2023 council meeting are now available for download in the meetings section.",
      type: "info",
      read: true,
      category: "Meetings"
    },
    {
      id: 4,
      date: "2024-01-08",
      time: "04:20 PM",
      title: "Professional Conduct Guidelines Updated",
      message: "New amendments to professional conduct regulations have been published. Please review the updated guidelines.",
      type: "important",
      read: true,
      category: "Regulations"
    },
    {
      id: 5,
      date: "2024-01-05",
      time: "11:00 AM",
      title: "System Maintenance Scheduled",
      message: "The online registration portal will be under maintenance on January 20, 2024 from 12:00 AM to 6:00 AM.",
      type: "info",
      read: true,
      category: "System"
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "important":
        return AlertCircle;
      case "warning":
        return Bell;
      case "info":
        return Calendar;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "important":
        return "bg-medical-red text-white";
      case "warning":
        return "bg-medical-orange text-white";
      case "info":
        return "bg-medical-blue text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-medical-teal to-medical-teal-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Notifications
                </h1>
                <p className="text-xl opacity-90 max-w-2xl">
                  Stay updated with important announcements, reminders, and system updates from APMC
                </p>
              </div>
              {unreadCount > 0 && (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{unreadCount}</div>
                  <div className="text-sm opacity-90">Unread</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Notifications */}
          <div className="flex-1 space-y-6">
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-medical-teal" />
                <span className="font-semibold text-foreground">
                  {notifications.length} Total Notifications
                </span>
                {unreadCount > 0 && (
                  <Badge className="bg-medical-red text-white ml-2">
                    {unreadCount} New
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                {unreadCount > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={markAllAsRead}
                    className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Mark All Read
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/60 hover:text-medical-teal"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Notifications List */}
            {notifications.map((notification) => {
              const NotificationIcon = getNotificationIcon(notification.type);
              return (
                <Card 
                  key={notification.id} 
                  className={`border border-border/50 shadow-card hover:shadow-medical transition-shadow ${
                    !notification.read ? 'bg-medical-teal/5 border-medical-teal/20' : ''
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${
                            notification.type === 'important' ? 'bg-medical-red/10' :
                            notification.type === 'warning' ? 'bg-medical-orange/10' :
                            'bg-medical-blue/10'
                          }`}>
                            <NotificationIcon className={`w-5 h-5 ${
                              notification.type === 'important' ? 'text-medical-red' :
                              notification.type === 'warning' ? 'text-medical-orange' :
                              'text-medical-blue'
                            }`} />
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {notification.category}
                            </Badge>
                            <Badge className={getNotificationColor(notification.type)}>
                              {notification.type.toUpperCase()}
                            </Badge>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-medical-red rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-primary leading-tight">
                          {notification.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-foreground/60">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(notification.date).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="text-xs mt-1 text-right">
                            {notification.time}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8 p-0 hover:bg-medical-teal/10 hover:text-medical-teal"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8 p-0 hover:bg-medical-red/10 hover:text-medical-red"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">
                      {notification.message}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Notification Categories */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["All", "Education", "Registration", "Regulations", "Meetings", "System"].map((category) => (
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

            {/* Notification Settings */}
            <Card className="border border-medical-green/20 bg-medical-green/5">
              <CardHeader>
                <CardTitle className="text-lg text-medical-green">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-foreground/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <div className="w-8 h-4 bg-medical-green rounded-full relative">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS Alerts</span>
                    <div className="w-8 h-4 bg-muted rounded-full relative">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <div className="w-8 h-4 bg-medical-green rounded-full relative">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                </div>
                <Separator />
                <Button 
                  className="w-full bg-medical-green text-white hover:bg-medical-green/90"
                  size="sm"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Council Updates
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Meeting Schedules
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-medical-orange text-medical-orange hover:bg-medical-orange hover:text-white"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Important Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;