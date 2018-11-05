import express from 'express';
//import Article from '../models/articlesModel.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

let router = express.Router();



const isAuthenticated = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    const authorizationToken = authorizationHeader.split(' ')[1];
    if (authorizationToken) {
        jwt.verify(authorizationToken, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Failed to authenticate' });
            } else {
                next();
            }
        });
    } else {
        res.status(403).json({ error: 'No token provided' })
    }
}

export const getAllArticles = () => {
    return dispatch => {
        fetch(URL + '/')
        .then(res => res.json())
        .then(res => {
            dispatch({ type: actionTypes.GOT_ALL_ARTICLES, articles: res.articles })
        })
    };
};

router.get('/:id', (req, res) => {
    res.json({ article: req.params.id });
})

router.post('/UploadFastQC', isAuthenticated, (req, res) => {
    console.log(req);
    const title = req.body.title || '';
    const author = req.body.author || '';
    const body = req.body.body || '';

    res.json({ success: 'success' });
});

export default router;
