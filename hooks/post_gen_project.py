import json
import os

# Supongamos que estos son los parámetros que recibes en formato JSON
specs_data = '{{ cookiecutter.specsData }}'
testimonials_data = '{{ cookiecutter.testimonialsData }}'

# Creando un diccionario con todos los datos
data = {
    "brandName": "{{ cookiecutter.brandName }}",
    "brandImage": "{{ cookiecutter.brandImage }}",
    "brandDescription": "{{ cookiecutter.brandDescription }}",
    "specsData": specs_data["items"],
    "testimonialsData": testimonials_data["items"],
    "customersTestimonialsTitle": "{{ cookiecutter.customersTestimonialsTitle }}"
}

# Creando el archivo data.json en el directorio src
with open(os.path.join('{{ cookiecutter.project_name }}', 'src', 'data.json'), 'w') as f:
    json.dump(data, f, indent=4)
