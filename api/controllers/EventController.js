/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //create event function
    create: async function (req, res) {
        if (req.method == "GET")
            return res.view('event/create');

        if (typeof req.body.Event === "undefined")
            return res.badRequest=("Form-data not received");

        await Event.create(req.body.Event)

        return res.ok("Created Successfully");



    },

    //mainpage function
    mainpage: async function (req, res) {
        var events=await Event.find();
        return res.view('event/mainpage', {'events': events});
    },

};

