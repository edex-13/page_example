
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const atagStyle = !isScrolled
    ? "text-background hover:text-powble-darkGray transition-colors"
    : "text-foreground hover:text-powble-darkGray transition-colors";

  const navItemStyle = !isScrolled
    ? "text-foreground hover:text-powble-darkGray transition-colors"
    : "text-background hover:text-powble-darkGray transition-colors bg-foreground";

  const buttonStyle = !isScrolled
    ? "bg-background text-foreground hover:bg-powble-darkGray hover:text-foreground"
    : "bg-foreground text-background hover:bg-background hover:text-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled ? 'bg-powble-black shadow-md py-3' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Logo isScrolled={isScrolled} />

        <div className="hidden md:flex space-x-20">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemStyle}>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-powble-black flex flex-row gap-10">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <div
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <img src="/icon3d.png" alt="Powble Logo" width={100} height={100} />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Powble AI Toolbox
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Ready to use Electrical design AI tools
                          </p>
                        </div>
                    </li>
                    <ListItem href="/NormaCheck" title="NormaCheck">
                      Our AI assistant detects, diagnoses and fixes designs
                    </ListItem>

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemStyle}>Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-powble-black flex flex-row gap-10">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                    <li className="row-span-1 w-full">
                      <h3 className="text-powble-white">
                        Design cycle
                      </h3>
                      <ListItem href="/useCases/#fast-revision" title="Fast revision">
                        Fast revision of designs with provided standards
                      </ListItem>
                      <ListItem href="/useCases/#labeling" title="Labeling">
                        Labeling and suggestion of standards over your design
                      </ListItem>
                      <ListItem href="/useCases/#ticket-responses" title="Ticket responses">
                        Formal generation of ticket responses for stakeholders
                      </ListItem>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={atagStyle}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#metrics" className={atagStyle}>
                  Metrics
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#testimonials" className={atagStyle}>
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing" className={atagStyle}>
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button className={buttonStyle}>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
