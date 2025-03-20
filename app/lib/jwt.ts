import jwt, { JwtPayload as JwtPayloadBase } from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'jwt_secret_key';

export interface JwtPayload extends JwtPayloadBase {
  userId: string;
  email: string;
}

export function signJwtToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: '7d' },
      (err: Error | null, token: string | undefined) => {
        if (err || !token) {
          return reject(err || new Error('Token generation failed'));
        }
        resolve(token);
      }
    );
  });
}

export function verifyJwtToken(token: string): Promise<JwtPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      JWT_SECRET,
      (err: Error | null, decoded: object | undefined) => {
        if (err || !decoded) {
          return reject(err || new Error('Token verification failed'));
        }
        resolve(decoded as JwtPayload);
      }
    );
  });
} 