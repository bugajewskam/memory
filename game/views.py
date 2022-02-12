from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render
from django.urls import reverse

from game.models import Memory, MemoryForm


def index(request):
    return render(request, 'index.html')


def create(request):
    if request.method == "POST":

        form = MemoryForm(request.POST, request.FILES)

        if form.is_valid():

            gra = form.save()

            return render(request, "create.html", {
                 "gra": gra
            })
        else:
            return render(request, "create.html", {
                "memory": form
            })

    return render(request, "create.html", {
        "memory": MemoryForm()
    })


def memory(request, id):
    memory = Memory.objects.filter(id=id).first()
    if not memory:
        raise Http404()
    return render(request, 'memory.html', {
        'memory': memory

    })
