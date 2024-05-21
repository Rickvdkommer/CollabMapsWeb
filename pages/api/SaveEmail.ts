import { NextApiRequest, NextApiResponse } from "next";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    const workbook = new ExcelJS.Workbook();
    let worksheet = workbook.getWorksheet("Emails");

    if (!worksheet) {
      worksheet = workbook.addWorksheet("Emails");
      worksheet.columns = [{ header: "Email", key: "email", width: 30 }];
    }

    // Add the new email to the worksheet
    worksheet.addRow({ email });

    // Generate a unique filename
    const filename = `emails_${Date.now()}.xlsx`;
    const filePath = path.join(process.cwd(), "public", "data", filename);

    // Create the directory if it doesn't exist
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Save the workbook to a file
    await workbook.xlsx.writeFile(filePath);

    res.status(200).json({ message: "Email saved successfully", filename });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
