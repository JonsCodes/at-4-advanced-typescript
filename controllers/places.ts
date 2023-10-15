import express, { Request, Response } from "express";
import { Place, IPlace, Comment, IComment } from "../models";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Place.find()
    .then((places: IPlace[]) => {
      res.render("places/index", { places });
    })
    .catch((err: Error) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req: Request, res: Response) => {
  Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err: any) => {
      if (err && err.name === "ValidationError") {
        let message = "Validation Error: ";
        for (const field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req: Request, res: Response) => {
  res.render("places/new");
});

router.get("/:id", (req: Request, res: Response) => {
  Place.findById(req.params.id)
    .populate("comments")
    .then((place: IPlace | null) => {
      res.render("places/show", { place });
    })
    .catch((err: Error) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.post("/:id/comment", (req: Request, res: Response) => {
  req.body.rant = req.body.rant ? true : false;
  Place.findById(req.params.id)
    .then((place: IPlace | null) => {
      if (place) {
        Comment.create(req.body)
          .then((comment: IComment) => {
            place.comments.push(comment._id);
            place.save().then(() => {
              res.redirect(`/places/${req.params.id}`);
            });
          })
          .catch((err: Error) => {
            res.render("error404");
          });
      } else {
        res.render("error404");
      }
    })
    .catch((err: Error) => {
      res.render("error404");
    });
});

router.put("/:id", (req: Request, res: Response) => {
  Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err: Error) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err: Error) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/edit", (req: Request, res: Response) => {
  Place.findById(req.params.id)
    .then((place: IPlace | null) => {
      if (place) {
        res.render("places/edit", { place });
      } else {
        res.render("error404");
      }
    })
    .catch((err: Error) => {
      res.render("error404");
    });
});

router.delete("/:id/comment/:commentId", (req: Request, res: Response) => {
  Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err: Error) => {
      console.log("err", err);
      res.render("error404");
    });
});

export default router;
