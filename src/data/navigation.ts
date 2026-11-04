export type NavDestination = string | null;
export const ROUTES = { home: "/alternatives" } as const;
export const NAV_ITEMS = [{ label: "Alternatives", href: ROUTES.home }];
export type JourneyKey = "buyer" | "vendor" | "partner";
export const JOURNEYS: {key: JourneyKey; title: string; description: string; href: NavDestination}[] = [
 {key:"buyer",title:"I’m an AI Buyer",description:"Find AI solutions · Coming soon",href:null},
 {key:"vendor",title:"I’m an AI Vendor",description:"List your product · Coming soon",href:null},
 {key:"partner",title:"I’m a Channel Partner",description:"Partner with AI companies · Coming soon",href:null},
];
export const FOOTER_COMPANY: {label:string;href:NavDestination}[] = [{label:"About us",href:null}];
export const FOOTER_HELP: typeof FOOTER_COMPANY = [{label:"Contact us",href:null},{label:"Privacy policy",href:null},{label:"Terms and conditions",href:null}];
export const FOOTER_LEGAL: typeof FOOTER_COMPANY = [{label:"Privacy Policy",href:null},{label:"Terms of Service",href:null}];
export const FOOTER_ALTERNATIVES: typeof FOOTER_COMPANY = [{label:"All Alternatives",href:"/alternatives"},{label:"PartnerStack Alternatives",href:"/alternatives/partnerstack-alternatives"}];
