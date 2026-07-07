import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import cors from 'cors'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true,
	methods: ['POST', 'PUT', 'GET', 'DELETE', 'PATCH']
}))

app.get("/", (req, res) => {
	res.json({ message: "API is running" });
});

app.use("/api/auth", authRouter);

export default app;
