import fs from "fs"
import path from "path"
import Book from '../dto/book.dto';

function readJSONFile(filePath: string): { data: Book[], status: number } {
	const relativePath = path.relative('./', `data/${filePath}`)

	if (!fs.existsSync(relativePath)) {
		fs.writeFileSync(relativePath, '[]', 'utf8')
		return { data: [], status: 201 }
	}

	const fileContents = fs.readFileSync(relativePath, 'utf8')
	const data: Book[] = JSON.parse(fileContents)

	return { data, status: 200 }
}

export { readJSONFile }