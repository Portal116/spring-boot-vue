DROP TABLE s_review CASCADE CONSTRAINTS;

DROP SEQUENCE review_seq;

CREATE TABLE s_review (
    reviewno  NUMBER(10) PRIMARY KEY,
    productno NUMBER(10),
    image     VARCHAR(50),
    content   VARCHAR(600),
    id        VARCHAR(50),
    CONSTRAINT fk_qnareview FOREIGN KEY ( productno )
        REFERENCES s_product ( productno )
);

CREATE SEQUENCE review_seq START WITH 1 INCREMENT BY 1 MAXVALUE 9999999999 NOCYCLE NOCACHE;

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    1,
    'review01.jpg',
    '�ıⰡ ���� ���Ҵ� ���̶� �ϰ� ��µ� ���ó� �̻ڰ� �ʹ� ������ ���� �ʰԾ˾Ƽ� �������� ��ΰ��ְ������ �׷��� �����մϴ�',
    'tester0001'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    1,
    'review02.jpg',
    '��� 255~260�Ŵµ� �ߺ������־ 260 �����߰� �� �¾ƿ�. �±� �Դϴ�',
    'btester0002'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    1,
    'review03.jpg',
    '�ϴ� �̻��� ������ ����! �Ź��� ������ �ణ ũ�� ���°��� �� �Ź� ����� 257�ε� 255 �˳��ϰ� ���� ���� ���Ϸ� ���� ���� �����̶� ����� �� �������� �����ߴµ� ���� �����̾��׿� ���� �� �ʹ� �����մϴ�!!',
    'tester0005'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    1,
    'review04.jpg',
    '������ ������� ���ؿ� ��ǰ�ΰ� �³���?;; �� ������ ��ǥ�õ� �帴�ؼ� ���� �׷���..',
    'ctester0003'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    1,
    'review05.jpg',
    '�Ź� �� ���� ��ũ�� �������ֳ׿� �Ź߲��� �̹��� �����ֱ���',
    'tester0004'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    2,
    '����6',
    '�ı�6',
    '�г���6'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    2,
    '����7',
    '�ı�7',
    '�г���7'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    2,
    '����8',
    '�ı�8',
    '�г���8'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    2,
    '����9',
    '�ı�9',
    '�г���9'
);

INSERT INTO s_review VALUES (
    review_seq.NEXTVAL,
    2,
    '����10',
    '�ı�10',
    '�г���10'
);

COMMIT;

SELECT
    *
FROM
    s_review;
    

--SELECT id FROM s_product WHERE productno = 1;
--select s_product.productno, s_product.imagename, sum(s_order.totalprice) totalsell from s_product left join s_order on s_product.productno = s_order.productno where s_product.id = (SELECT id FROM s_product WHERE productno = 1) and s_order.totalprice > 0 group by s_product.productno, s_product.imagename order by totalsell desc;