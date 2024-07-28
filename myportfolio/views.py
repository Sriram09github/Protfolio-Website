from django.shortcuts import render,redirect
from .forms import ContactForm
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('thank_you')
    else:
        form = ContactForm()
        print("Error")
    return render(request, 'index.html', {'form': form})
def form(request):
    return render(request,'index.html')
 