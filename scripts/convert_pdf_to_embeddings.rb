require 'dotenv'
require 'openai'
require 'pdf-reader'
require 'csv'

openai_client = OpenAI::Client.new(access_token: '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')

pdf_text = ''

pdf_file_path = File.join(File.dirname(__FILE__), 'book.pdf')

CSV.open('embeddings.csv', 'w') do |csv|
    csv << ['Page', 'Text', 'Embedding']
end

PDF::Reader.open(pdf_file_path) do |reader|
    reader.pages.each_with_index do |page, i|
        pdf_text = page.text.delete("\n").squeeze(' ')

        if !pdf_text.empty?
            response = openai_client.embeddings(
                parameters: {
                model: "text-embedding-ada-002",
                input: pdf_text
                }
            )

            embedding = response['data'][0]['embedding']

            CSV.open('embeddings.csv', 'a') do |csv|
                csv << ["Page #{i+1}", pdf_text, embedding]
            end
        end
    end
  end

