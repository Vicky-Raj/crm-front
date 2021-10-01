const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const Customer = require("./Models/customerModel");
const Manager = require("./Models/managerModel");
const Log = require("./Models/logModel");
const Review = require("./Models/reviewModel");


app.use(cors());

app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(express.json())

const PORT = 7000;

mongoose
    .connect("mongodb://localhost:27017/crm", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/customer",(req,res)=>{
    Customer.find({}, (err, customers)=>{
        if (err) throw err;
        res.json(customers);
    });
})
app.post("/customer",(req,res)=>{
    const customer = new Customer(req.body);
    customer.save((err, ins) => {
        if (err) throw err;
        res.json(ins);
    });
})
app.put("/customer/:id",(req,res)=>{
    Customer.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            email: req.body.email,
            manager: req.file.manager,
        },
        { new: true, upsert: true }
    ).exec((err,ins)=>{
        if (err) throw err;
        res.json(ins);
    })
})
app.delete("/customer/:id",(req,res)=>{
    Customer.findByIdAndDelete(req.params.id).exec((err,ins)=>{
        if (err) throw err;
        res.send(ins);
    })
})

app.get("/manager",(req,res)=>{
    Manager.find({}).lean().exec(async(err,managers)=>{
        for(let i=0;i<managers.length;i++){
            managers[i]["customers"] = await Customer.find({manager:managers[i]["name"]}).exec()
        }
        res.json(managers);
    })
})
app.post("/manager",(req,res)=>{
    const manager = new Manager(req.body);
    manager.save((err, ins) => {
        if (err) throw err;
        res.json(ins);
    });
})
app.put("/manager/:id",(req,res)=>{
    Manager.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            email: req.body.email,
        },
        { new: true, upsert: true }
    ).exec((err,ins)=>{
        if (err) throw err;
        res.json(ins);
    })
})
app.delete("/manager/:id",(req,res)=>{
    Manager.findByIdAndDelete(req.params.id).exec((err,ins)=>{
        if (err) throw err;
        res.send(ins);
    })
})


app.get("/log",(req,res)=>{
    if("manager" in req.query){
        Log.find({manager:req.query.manager},(err,logs)=>{
            res.json(logs);
        })
    }else if("customer" in req.query){
        Log.find({customer:req.query.customer},(err,logs)=>{
            res.json(logs);
        })
    }else{
        Log.find({},(err,logs)=>{
            res.json(logs);
        })
    }
})
app.post("/log",(req,res)=>{
    const log = new Log(req.body);
    log.save((err, ins) => {
        if (err) throw err;
        res.json(ins);
    });
})
app.put("/log/:id",(req,res)=>{
    Log.findOneAndUpdate(
        { _id: req.params.id },
        {
            manager: req.body.manager,
            customer: req.body.customer,
            content:req.body.content
        },
        { new: true, upsert: true }
    ).exec((err,ins)=>{
        if (err) throw err;
        res.json(ins);
    })
})
app.delete("/log/:id",(req,res)=>{
    Log.findByIdAndDelete(req.params.id).exec((err,ins)=>{
        if (err) throw err;
        res.send(ins);
    })
})

app.get("/review",(req,res)=>{
    if("manager" in req.query){
        Review.find({manager:req.query.manager},(err,reviews)=>{
            res.json(reviews);
        })
    }else if("customer" in req.query){
        Review.find({customer:req.query.customer},(err,reviews)=>{
            res.json(reviews);
        })
    }else{
        Review.find({},(err,reviews)=>{
            res.json(reviews);
        })
    }
})
app.post("/review",(req,res)=>{
    const review = new Review(req.body);
    review.save((err, ins) => {
        if (err) throw err;
        res.json(ins);
    });
})
app.put("/review/:id",(req,res)=>{
    Review.findOneAndUpdate(
        { _id: req.params.id },
        {
            manager: req.body.manager,
            customer: req.body.customer,
            content:req.body.content
        },
        { new: true, upsert: true }
    ).exec((err,ins)=>{
        if (err) throw err;
        res.json(ins);
    })
})
app.delete("/review/:id",(req,res)=>{
    Review.findByIdAndDelete(req.params.id).exec((err,ins)=>{
        if (err) throw err;
        res.send(ins);
    })
})


// app.get("/", (req, res) => {
//     if (req.query.id){
//         Blog.findById(req.query.id).exec((err,ins)=>{
//             if (err) throw err;
//             res.send(ins);
//         })
//     }
//     else{
//     Blog.find({}, function (err, blogs) {
//         if (err) throw err;
//         res.json(blogs);
//     });
//     }
// });

// app.get("/", (req, res) => {

// });

// app.post("/", upload.single("img"), (req, res) => {
//     const blog = new Blog({
//         title: req.body.title,
//         subtitle: req.body.subtitle,
//         img: req.file.filename,
//         description: req.body.description,
//     });
//     blog.save((err, ins) => {
//         if (err) throw err;
//         res.json(ins);
//     });
// });

// app.put("/:id", upload.single("img"), (req, res) => {
//     Blog.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//             title: req.body.title,
//             subtitle: req.body.subtitle,
//             img: req.file.filename,
//             description: req.body.description,
//         },
//         { new: true, upsert: true }
//     ).exec((err,ins)=>{
//         if (err) throw err;
//         res.json(ins);
//     })
// });

// app.delete("/:id",(req,res)=>{
//     Blog.findByIdAndDelete(req.params.id).exec((err,ins)=>{
//         if (err) throw err;
//         res.send(ins);
//     })
// })

app.listen(PORT, console.log(`listening on port ${PORT}`));