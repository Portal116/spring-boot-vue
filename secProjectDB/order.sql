DROP TABLE s_order CASCADE CONSTRAINTS;

DROP SEQUENCE order_seq;

CREATE TABLE s_order (
    orderidx       NUMBER(20) PRIMARY KEY,
    id             VARCHAR2(20) NOT NULL,
    productno      NUMBER(9) NOT NULL,
    selectedoption VARCHAR2(100) NOT NULL,
    delivery       NUMBER(5) NOT NULL,
    totalprice     NUMBER(10) NOT NULL,
    orderdate      DATE DEFAULT sysdate,
    state          VARCHAR2(20) DEFAULT '�����Ϸ�',
    name           VARCHAR2(50) NOT NULL,
    tel            VARCHAR2(11) NOT NULL,
    zipcode        VARCHAR2(5) NOT NULL,
    address        VARCHAR2(80) NOT NULL,
    detailaddr     VARCHAR2(50) NOT NULL,
    CONSTRAINT fk_ordmem FOREIGN KEY ( id )
        REFERENCES s_member ( id )
            ON DELETE CASCADE,
    CONSTRAINT fk_ordprod FOREIGN KEY ( productno )
        REFERENCES s_product ( productno )
            ON DELETE CASCADE
);

CREATE SEQUENCE order_seq START WITH 1 INCREMENT BY 1 MAXVALUE 9999999999 NOCYCLE NOCACHE;

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0006',
    1,
    '05.NB_MR530KA',
    0,
    73800,
    sysdate,
    '��� �Ϸ�',
    '�׽���6',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '6�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    1,
    'a',
    0,
    73800,
    sysdate,
    '��� �Ϸ�',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    1,
    'b',
    0,
    73800,
    sysdate,
    '��� ��û',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    2,
    'a',
    0,
    73800,
    sysdate,
    '��� �Ϸ�',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    2,
    'b',
    0,
    73800,
    sysdate,
    '��� �Ϸ�',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    3,
    'a',
    0,
    73800,
    sysdate,
    '�����',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    3,
    'b',
    0,
    73800,
    sysdate,
    '��� �Ϸ�',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    1,
    'a',
    0,
    73800,
    sysdate,
    '�����',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

INSERT INTO s_order VALUES (
    order_seq.NEXTVAL,
    'tester0001',
    14,
    'a',
    0,
    73800,
    sysdate,
    '���� �Ϸ�',
    '�׽���1',
    '01000000000',
    '06220',
    '���� ������ ������� 212',
    '1�� 1ȣ'
);

COMMIT;

SELECT
    *
FROM
    s_order;
    
--  s_order, s_product, s_member���� ���� ��������  
SELECT
    *
FROM
    s_order
    RIGHT OUTER JOIN s_member ON s_member.id = s_order.id
    LEFT OUTER JOIN s_product ON s_product.productno = s_order.productno
WHERE
    s_product.id = 'seller0001';

SELECT
    *
FROM
    s_member,
    s_order,
    s_product
WHERE
    s_member.id = s_order.id
    AND s_order.productno = s_product.productno
    AND s_product.id = 'seller0001';