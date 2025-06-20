import PyPDF2

def extract_pdf_text(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            return text
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    text = extract_pdf_text('public/KavyaNarayanResume_Ford.pdf')
    if text:
        print(text)
    else:
        print("Failed to extract text from PDF") 