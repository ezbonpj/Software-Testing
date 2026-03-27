import * as xlsx from "xlsx";
import * as path from "path"; 


export const readExcelFile = (fileName: string,sheetName: string): any[] =>{
    const filePath =   path.join(process.cwd(),"/testdata/",fileName); 

    try {
        const workBook = xlsx.readFile(filePath);
        const sheet  = workBook.Sheets[sheetName];
        const data  =  xlsx.utils.sheet_to_json(sheet);
        console.log(data);
        return data;
    }
    catch(err){
        console.error("error readingf excel file");
        throw new Error("Error reading excel file"); 
    }
} 
let data = readExcelFile("Book1.xlsx","Sheet1");