import json
import os

# Supongamos que estos son los parámetros que recibes en formato JSON
specs_data = '{{ cookiecutter.specsData }}'
testimonials_data = '{{ cookiecutter.testimonialsData }}'

# Convirtiendo las cadenas a objetos de Python
specs_data_obj = json.loads(specs_data)
testimonials_data_obj = json.loads(testimonials_data)

# Creando un diccionario con todos los datos
data = {
    "brandName": "{{ cookiecutter.brandName }}",
    "brandImage": "{{ cookiecutter.brandImage }}",
    "brandDescription": "{{ cookiecutter.brandDescription }}",
    "specsData": specs_data_obj["items"],
    "testimonialsData": testimonials_data_obj["items"],
    "customersTestimonialsTitle": "{{ cookiecutter.customersTestimonialsTitle }}"
}

# Creando el archivo data.json en el directorio src
with open(os.path.join('{{ cookiecutter.project_name }}', 'src', 'copyData.json'), 'w') as f:
    json.dump(data, f, indent=4)
