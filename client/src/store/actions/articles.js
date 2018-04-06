import * as actionTypes from './actionTypes.js';

const URL = "http://localhost:5000";

const allArticlesReceivedSuccessfully = (articles) => {
    return {
        type: actionTypes.GET_ALL_ARTICLES,
        articles: articles
    };
};

const singleArticleReceivedSuccessfully = (article) => {
    return {
        type: actionTypes.GET_SINGLE_ARTICLE,
        article: article
    };
};

const newArticleSubmittedSuccessfully = () => {
    return {
        type: actionTypes.NEW_ARTICLE_SUBMITTED,
        submitted: true
    };
};

const errorSubmittingNewArticle = (err) => {
    return {
        type: actionTypes.ERROR_SUBMITTING_ARTICLE,
        error: err
    };
};

export const getAllArticles = () => {
    return dispatch => {
        return (
            fetch(URL + '/')
                .then(res => res.json())
                .then(data => {
                    dispatch(allArticlesReceivedSuccessfully(data))
                })
        );
    };
};

export const getSingleArticle = (articleId) => {
    return dispatch => {
        return (
            fetch(URL + '/articles/' + articleId)
            .then(res => res.json())
            .then(data => {
                dispatch(singleArticleReceivedSuccessfully(data))
            })
        );
    };
};

export const submitNewArticle = (articleData) => {
    return dispatch => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(articleData)
        };
        return (
            fetch(URL + '/article/add', options)
            .then(res => {
                if (res.ok) {
                    dispatch(newArticleSubmittedSuccessfully())
                } else {
                    let error = new Error(res.statusText);
                    dispatch(errorSubmittingNewArticle(error))
                }
            })
        );
    }
};