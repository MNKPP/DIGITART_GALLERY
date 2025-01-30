import jwt from 'jsonwebtoken';

const authenticateToken = async (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];

    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(403).json({
            message: 'Invalid token'
        });
    }
}

export default authenticateToken;