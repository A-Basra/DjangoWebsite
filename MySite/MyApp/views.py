from django.shortcuts import render

# Create your views here.
def  myview(request):
    return render(request, "index.html")

def test(request):
    return render(request, 'test.html')