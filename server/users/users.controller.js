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
        ca_activity_1: Joi.string().allow(''),
        ca_activity_1_desc: Joi.string().allow(''),
        ca_activity_2: Joi.string().allow(''),
        ca_activity_2_desc: Joi.string().allow(''),
        ca_activity_3: Joi.string().allow(''),
        ca_activity_3_desc: Joi.string().allow(''),
        ca_activity_4: Joi.string().allow(''),
        ca_activity_4_desc: Joi.string().allow(''),
        ca_activity_5: Joi.string().allow(''),
        ca_activity_5_desc: Joi.string().allow(''),
        ca_activity_6: Joi.string().allow(''),
        ca_activity_6_desc: Joi.string().allow(''),
        ca_activity_7: Joi.string().allow(''),
        ca_activity_7_desc: Joi.string().allow(''),
        ca_activity_8: Joi.string().allow(''),
        ca_activity_8_desc: Joi.string().allow(''),
        ca_activity_9: Joi.string().allow(''),
        ca_activity_9_desc: Joi.string().allow(''),
        ca_activity_10: Joi.string().allow(''),
        ca_activity_10_desc: Joi.string().allow(''),
        ca_award_1: Joi.string().allow(''),
        ca_award_1_desc: Joi.string().allow(''),
        ca_award_2: Joi.string().allow(''),
        ca_award_2_desc: Joi.string().allow(''),
        ca_award_3: Joi.string().allow(''),
        ca_award_3_desc: Joi.string().allow(''),
        ca_award_4: Joi.string().allow(''),
        ca_award_4_desc: Joi.string().allow(''),
        ca_award_5: Joi.string().allow(''),
        ca_award_5_desc: Joi.string().allow(''),
    });
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