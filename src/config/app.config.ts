interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'Project Manager', 'Client', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'Project Tracker',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage team information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e8ac2b12-c919-42ec-b4ae-f89a319f9670',
};
