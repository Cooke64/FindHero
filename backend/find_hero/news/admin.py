import base64
from django.contrib.auth.models import User, Group
from django.contrib import admin
from django.utils.html import format_html

from .models import  NewsItem, Image


class NewsItemImageInline(admin.TabularInline):
    model = Image
    extra = 3
    fields = ('image', )


@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'title',
        'created_at'
    )
    search_fields = ('title',)
    inlines = (NewsItemImageInline,)
    empty_value_display = '-empty-'
    ordering = ['-pk']
    fieldsets = (
        ('Текстовая часть',
         {'fields': ('title', 'preview', 'text')}),
    )


admin.site.site_header = "Административная панель проекта FindHero"
admin.site.site_title = "Find_Hero"
admin.site.index_title = ""


admin.site.unregister(User)
admin.site.unregister(Group)