import jwt_decode from 'jwt-decode';

export default function verifyJWT(token: string): boolean {
  try {
    const data = jwt_decode(token);
    // token is valid
    return true
  } catch(error) {
    // invalid token format
    return false
  }
}
