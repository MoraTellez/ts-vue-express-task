import app from "./app"
import { startConnection } from "./database"

startConnection()
app.listen(3000)
