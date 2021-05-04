from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
import datetime
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "rdv")
@app.post("/ajouter/rdv")
async def ajouter(request:Request,numRDV:str,date:str,heure:str):
    mycursor = mydb.cursor()
    sql="INSERT INTO `rendez-vous` ( `numRDV`, `date`, `heure`) VALUES (%s,%s,%s);"
    val=(numRDV,date,heure)
    mycursor.execute(sql,val)
    mydb.commit()
    return {"Rendez Vous Ajoutée"}
    mydb.close()


    
@app.post("/Modifier/rdv")
def modifier(request:Request,numRDV:str,date:str,heure:str):
    mycursor = mydb.cursor()
    sql="Update `rendez-vous` set  `numRDV`=%s, `date`=%s, `heure`=%s WHERE `rendez-vous`.`numRDV`=%s;"
    val=(numRDV,tel,date,heure,numRDV)
    mycursor.execute(sql,val)
    mydb.commit()
    return {"Rendez Vous Modifiée"}
    mydb.close()
@app.post("/supp/rdv")
def supp(request:Request,date:str,heure:str):
    mycursor = mydb.cursor()
    sql="delete from `rendez-vous` where `date`=%s and `heure`=%s;"
    val=(date,heure)
    mycursor.execute(sql,val)
    mydb.commit()
    return {"Rendez Vous Supprimée"}
    mydb.close()
@app.get("/Liste")
def afficherdv():
    mycursor = mydb.cursor()
    sql="select * from `rendez-vous` ;"
    mycursor.execute(sql)
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
    mydb.close()
