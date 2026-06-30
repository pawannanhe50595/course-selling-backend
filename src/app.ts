import express from "express";
import authRoutes from "./routes/auth.routes";
import courseRoutes from "./routes/course.routes";
import studentRoutes from "./routes/student.routes";
import enrollmentRoutes from "./routes/enrollment.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Course Selling Backend API is Running...");
});

app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);
app.use("/enrollments", enrollmentRoutes);

export default app;