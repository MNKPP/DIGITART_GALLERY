import { z } from 'zod';

const memberValidator = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.string().default('member'),
})

export default memberValidator;