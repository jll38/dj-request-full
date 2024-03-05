from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
 return {"message":"Hello world, looks like this is working"}