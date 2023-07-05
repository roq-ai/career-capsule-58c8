const mapping: Record<string, string> = {
  colleges: 'college',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
