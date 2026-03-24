import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохраняет заявку на доступ к системе CryptoHFT в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    phone = body.get('phone', '').strip()
    deposit = body.get('deposit', '').strip()

    if not all([name, email, phone, deposit]):
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Все поля обязательны'})
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO applications (name, email, phone, deposit) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, email, phone, deposit)
    )
    app_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': app_id})
    }
