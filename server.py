from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)

@app.route('/generate-otp',methods=['POST'])
def hello_world():
    print(request.data)
    return jsonify('Hello, World!')

if __name__ == "__main__":
    app.run()