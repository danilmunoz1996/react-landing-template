import json

# Load the cookiecutter context
with open('cookiecutter.json') as f:
    context = json.load(f)

# Parse the JSON strings
context['specsData'] = json.loads(context['specsData'])
context['testimonialsData'] = json.loads(context['testimonialsData'])

# Save the modified context
with open('cookiecutter.json', 'w') as f:
    json.dump(context, f)