import crypto from 'crypto';

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

export function encrypt(data: string) {
  const cipher = crypto.createCipher('aes-256-cbc', SECRET_KEY);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(data: string) {
  const decipher = crypto.createDecipher('aes-256-cbc', SECRET_KEY);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
