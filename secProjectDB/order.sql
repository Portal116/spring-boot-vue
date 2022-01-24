DROP TABLE s_order CASCADE CONSTRAINTS;

DROP SEQUENCE order_seq;

CREATE TABLE s_order (
    orderidx       NUMBER(20) PRIMARY KEY,
    id             VARCHAR2(20) NOT NULL,
    productno      NUMBER(9) NOT NULL,
    selectedoption VARCHAR2(100) NOT NULL,
    totalprice     NUMBER(10) NOT NULL,
    orderdate      DATE DEFAULT sysdate,
    state          VARCHAR2(20) DEFAULT '�����Ϸ�',
    ordermethod    VARCHAR2(40) NOT NULL,
    dname          VARCHAR2(50) NOT NULL,
    dtel           VARCHAR2(11) NOT NULL,
    dzipcode       VARCHAR2(5) NOT NULL,
    daddress       VARCHAR2(80) NOT NULL,
    ddetailaddr    VARCHAR2(50) NOT NULL,
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
    73800,
    sysdate,
    '��� �Ϸ�',
    'ī��',
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
    73800,
    sysdate,
    '��� �Ϸ�',
    '������ �Ա�',
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
    73800,
    sysdate,
    '��� ��û',
    'ī��',
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
    73800,
    sysdate,
    '��� �Ϸ�',
    'ī��',
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
    73800,
    sysdate,
    '��� �Ϸ�',
    'ī��',
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
    73800,
    sysdate,
    '�����',
    '������ �Ա�',
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
    73800,
    sysdate,
    '��� �Ϸ�',
    'ī��',
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
    73800,
    sysdate,
    '�����',
    '�޴��� ����',
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
    73800,
    sysdate,
    '���� �Ϸ�',
    'ī��',
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
--SELECT * FROM s_order RIGHT OUTER JOIN s_member ON s_member.id = s_order.id LEFT OUTER JOIN s_product ON s_product.productno = s_order.productno WHERE s_product.id = 'seller0001';
--SELECT * FROM s_member, s_order, s_product WHERE s_member.id = s_order.id AND s_order.productno = s_product.productno AND s_product.id = 'seller0001';