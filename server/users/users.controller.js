const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register', registerSchema, register);
router.post('/submitForm', submitFormSchema, submitForm);

router.get('/', authorize(), getAll);
router.get('/current', authorize(), getCurrent);
router.get('/:username', getByUsername);
router.get('/:id', getById);

router.put('/:id', authorize(), updateSchema, update);

router.delete('/:id', authorize(), _delete);

module.exports = router;

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function submitFormSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        ca_activity: Joi.array().items(activity_schema),
        ca_award: Joi.array().items(award_scehma)
    });
    const activity_schema = Joi.object({
        activity_name: Joi.string().allow(''),
        activity_desc: Joi.string().allow('')
    })
    const award_scehma = Joi.object({
        award_name: Joi.string().allow(''),
        award_desc: Joi.string.allow('')
    })
    validateRequest(req, next, schema);
}

function submitForm(req, res, next) {
    userService.submitForm(req.body)
        .then(() => res.json({ message: 'Form Submit successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.user);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function getByUsername(req, res, next) {
    userService.getByUsername(req.params.username)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        username: Joi.string().empty(''),
        password: Joi.string().min(6).empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}