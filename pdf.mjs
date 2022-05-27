// Importing modules
import PDFDocument from 'pdfkit'
import fs from 'fs'

// Create a document
const doc = new PDFDocument({size: 'A4'});
var timestamp = Date.now()
var date = new Date(timestamp);
 

// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('Allure Report.pdf'));

doc.image('cypress\\logo\\Atlona.png', 200, 10, {
	fit: [200, 100], 
	align: 'center', 
	valign: 'center'
})
	.fontSize(25)
	.text('Test Automation Report', 80, 110, {
	   align: "center",
   })
   .fontSize(12)
   .text(`${date}`,{align:"center"})
   .image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report.png', 50, 180, {
		fit: [500, 500],
		align: 'center',
		valign: 'center'
	});

	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\logo\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (1).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});
	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\\screenshots\\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (2).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});
	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\\screenshots\\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (3).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});
	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\\screenshots\\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (4).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});
	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\\screenshots\\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (5).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});
	doc.addPage({
		margins: {
		top: 50,
		bottom: 50,
		left: 72,
		right: 72
		}
	   })
	   .image('cypress\\screenshots\\Atlona.png', 200, 10, {
		fit: [200, 100], 
		align: 'center', 
		valign: 'center'
	})
	.image('cypress\\screenshots\\Allure.feature\\Allure Result -- Open Allure Report (6).png', 50, 150, {
		fit: [500, 500], 
		align: 'center', 
		valign: 'center'
	});


// Finalize PDF file
doc.end();
