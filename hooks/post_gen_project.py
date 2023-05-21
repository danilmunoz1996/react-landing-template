import json
from jinja2 import Environment, FileSystemLoader, select_autoescape

# Load the JSON strings as Python dicts
specsData = json.loads('{{ cookiecutter.specsData }}')
testimonialsData = json.loads('{{ cookiecutter.testimonialsData }}')

# Load the template
env = Environment(
    loader=FileSystemLoader('{{ cookiecutter._template }}'),
    autoescape=select_autoescape(['html', 'xml'])
)
template = env.get_template('src/data.json')

# Render the template with the Python dicts
rendered_template = template.render(
    cookiecutter={
        'brandName': '{{ cookiecutter.brandName }}',
        'brandImage': '{{ cookiecutter.brandImage }}',
        'brandDescription': '{{ cookiecutter.brandDescription }}',
        'specsData': specsData['items'],
        'testimonialsData': testimonialsData['items'],
        'customersTestimonialsTitle': '{{ cookiecutter.customersTestimonialsTitle }}',
    }
)

# Save the rendered template
with open('{{ cookiecutter.project_name }}/src/data.json', 'w') as f:
    f.write(rendered_template)