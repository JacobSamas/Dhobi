import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a-hard-to-guess-string'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Add other global settings and configurations

class DevelopmentConfig(Config):
    DEBUG = True
    # Development specific configurations

class TestingConfig(Config):
    TESTING = True
    # Testing specific configurations

class ProductionConfig(Config):
    # Production specific configurations
    pass
