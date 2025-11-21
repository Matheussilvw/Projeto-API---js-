/**
 * Match score calculation:
 * - Skill match: percentage of user's skills that intersect opportunity.skills (weight 50%)
 * - Proximity: distance in km converted to a score (closer is better) (weight 30%)
 * - Availability: boolean match (weight 20%)
 *
 * Final score = 0.5*skillScore + 0.3*proximityScore + 0.2*availabilityScore
 *
 * proximityScore is normalized: distance 0km -> 1.0, >=50km -> 0.0.
 */
const haversineDistanceKm = (a,b) => {
  if(!a||!b) return Infinity;
  const toRad = v => v * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const sinDLat = Math.sin(dLat/2);
  const sinDLon = Math.sin(dLon/2);
  const c = 2 * Math.asin(Math.sqrt(sinDLat*sinDLat + Math.cos(lat1)*Math.cos(lat2)*sinDLon*sinDLon));
  return R * c;
};

const compute = (user, opportunity) => {
  const userSkills = (user.skills || []);
  const oppSkills = (opportunity.skills || []);
  const shared = userSkills.filter(s => oppSkills.includes(s));
  const skillScore = oppSkills.length ? (shared.length / oppSkills.length) : 0;

  const dist = haversineDistanceKm(user.location||{}, opportunity.location||{});
  const proximityScore = Math.max(0, 1 - (dist / 50)); // 50km radius normalization

  const userAvail = (user.availability && user.availability.weekdays) || [];
  const oppAvail = (opportunity.schedule && opportunity.schedule.weekdays) || [];
  const availabilityScore = oppAvail.some(d => userAvail.includes(d)) ? 1 : 0;

  const final = 0.5*skillScore + 0.3*proximityScore + 0.2*availabilityScore;
  return { score: final, details: { skillScore, proximityScore, availabilityScore, distanceKm: dist } };
};

module.exports = { compute };
